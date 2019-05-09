const dialogflow = require("dialogflow");
const uuid = require("uuid");
const sessionId = uuid.v4();

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