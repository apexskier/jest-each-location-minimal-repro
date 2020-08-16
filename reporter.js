class NovaExtensionReporter {
  onTestResult(test, testResult, aggregatedResult) {
    console.log(JSON.stringify(testResult.testResults.map(tr => tr.location), null, "  "));
  }
}

module.exports = NovaExtensionReporter;
