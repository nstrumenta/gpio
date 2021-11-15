import { NstrumentaClient } from "nstrumenta";
import ws from "ws";
import { asyncSpawn } from "./asyncSpawn";

const nst = new NstrumentaClient({
  apiKey: "",
  wsUrl: "ws://localhost:8088",
  projectId: "",
});

nst.addListener("open", () => {
  nst.subscribe("_host-status", async () => {
    const wd = await asyncSpawn("pwd",['-L']);
  });
});

//@ts-ignore
nst.init(ws);
