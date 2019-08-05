const dialogflow = require("dialogflow");
const uuid = require("uuid");
const sessionId = uuid.v4();

const squel = require("squel");
const mysql = require("mysql");
const connection_data = require('../mysql').connection_data;

async function createContext(projectId, name) {
  const contextClient = new dialogflow.ContextsClient();

  const contextData = {
    name: contextClient.contextPath(projectId, sessionId, name),
    lifespanCount: 3
  };

  const context = await contextClient.createContext({
    parent: sessionPath,
    context: contextData
  });

  return context;
}

exports.makePost = async (
  input_text,
  context,
  projectId = "test-agent-98155"
) => {
  // Create a new session
  const sessionClient = new dialogflow.SessionsClient();
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: input_text,
        // The language used by the client (es)
        languageCode: "es"
      }
    },
    queryParams: {
      context: createContext(projectId, context.split("/").pop())
    }
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log("Detected intent");
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log(`  No intent matched.`);
  }
  if (result.outputContexts.length !== 0) {
    console.log(`  Context: ${result.outputContexts[0].name}`);
    return {
      text: result.fulfillmentText,
      context: result.outputContexts[0].name ?
        result.outputContexts[0].name : "//"
    };
  }
  marked(result.fulfillmentText, (err, result) => {
    return {
      text: result,
      context: "DefaultContext"
    };
  })
};

exports.inicializarLecciones = (user_id) => {
  const connection = mysql.createConnection(connection_data);

  // Crear query
  let inicializar = squel.insert()
    .into("completed_lessons")
    .setFieldsRows([{
      lesson_id: 1,
      user_id: user_id,
      completed: 0
    }, {
      lesson_id: 2,
      user_id: user_id,
      completed: 0
    }, {
      lesson_id: 3,
      user_id: user_id,
      completed: 0
    }, {
      lesson_id: 4,
      user_id: user_id,
      completed: 0
    }])
    .toString();

  connection.connect();
  connection.query(inicializar, (err, result) => {
    if (err) console.log(err);
    if (err) return false;

    return true;
  });
}

exports.completarEjercicio = (req, res) => {
  const connection = mysql.createConnection(connection_data);

  console.log(req.body);

  // Crear query
  let complete = squel.update()
    .table("completed_lessons")
    .set("completed", 1)
    .where("user_id = ? AND exercise_id = ?", req.body.id, req.body.leccion)
    .toString();

  connection.connect();
  connection.query(complete, (err, result) => {
    if (err) res.status(500);

    res.status(200).send(true);
  });
}