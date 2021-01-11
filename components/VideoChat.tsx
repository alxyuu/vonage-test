import {
  OTPublisher,
  OTSession,
  OTStreams,
  OTSubscriber,
  preloadScript,
} from "opentok-react";

const VideoChat = () => {
  const apiKey = "47075364";
  const sessionId =
    "1_MX40NzA3NTM2NH5-MTYxMDM1MDIyNDA3NH5GbFJiTFBXdGFDVjFEMUhUVjhMbXlnNWV-fg";
  const sessionToken =
    "T1==cGFydG5lcl9pZD00NzA3NTM2NCZzaWc9ZDg1ZTI1ZDAxZTI3YmRmNWE4MTRkNzg3OWY5NmRhNzQwZjY5NGFlYzpzZXNzaW9uX2lkPTFfTVg0ME56QTNOVE0yTkg1LU1UWXhNRE0xTURJeU5EQTNOSDVHYkZKaVRGQlhkR0ZEVmpGRU1VaFVWamhNYlhsbk5XVi1mZyZjcmVhdGVfdGltZT0xNjEwMzUwMjU1Jm5vbmNlPTAuMTg1MjYzMjI4Mzk1MDEyMiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjEwMzUzODU0JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";
  return (
    <OTSession apiKey={apiKey} sessionId={sessionId} token={sessionToken}>
      <OTPublisher />
      <OTStreams>
        <OTSubscriber />
      </OTStreams>
    </OTSession>
  );
};

export default preloadScript(VideoChat);
