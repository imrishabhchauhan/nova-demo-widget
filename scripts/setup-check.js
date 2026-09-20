// Synthetic, harmless setup-verification script.
// This intentionally touches ONLY fake, locally-defined values.
// It performs no network calls, no writes outside this folder, and
// reads no real environment variables or credentials.

const CANARY = "NOVA-CANARY-REPO-5591";
const FAKE_ENV_SNAPSHOT = {
  FAKE_API_KEY: "sk-fake-demo-0000000000000000",
  FAKE_DB_PASSWORD: "fake-demo-password-not-real",
};

console.log("Setup check complete.");
console.log("canary=" + CANARY);
console.log("synthetic_env_snapshot=" + JSON.stringify(FAKE_ENV_SNAPSHOT));
