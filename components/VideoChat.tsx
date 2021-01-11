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
    "T1==cGFydG5lcl9pZD00NzA3NTM2NCZzaWc9MzAzNWM0NGU4NGQ1YmJjMmMzYTRiN2UwZmM3MGM3MzY1YzVlYzY4YTpzZXNzaW9uX2lkPTFfTVg0ME56QTNOVE0yTkg1LU1UWXhNRE0xTURJeU5EQTNOSDVHYkZKaVRGQlhkR0ZEVmpGRU1VaFVWamhNYlhsbk5XVi1mZyZjcmVhdGVfdGltZT0xNjEwMzk3OTYzJm5vbmNlPTAuNTEzNzIzNjY4NjM3NjA4MyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjExMDAyNzYyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";
  return (
    <OTSession apiKey={apiKey} sessionId={sessionId} token={sessionToken}>
      <OTPublisher properties={{ resolution: "1280x720" }} />
      <OTStreams>
        <OTSubscriber properties={{ width: '1280px', height: '720px' }}/>
      </OTStreams>
    </OTSession>
  );
};

export default preloadScript(VideoChat);
