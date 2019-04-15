const dialogflow = require("dialogflow");
const uuid = require("uuid");

exports.makePost = async (input_text, projectId = "test-agent-98155") => {
  // A unique identifier for the given session
  const sessionId = uuid.v4();

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
      context: result.outputContexts[0].name ? result.outputContexts[0].name : ""
    };
  }
  return {
    text: result.fulfillmentText,
    context: "DefaultContext"
  };
};