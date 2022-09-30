import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "MjQxNTk5NDYzODAwNTY5ODU2.GDl-TQ.fovLW94RxVlhfxdUBl4QutqOW5jqBQ5zvy2hdE"
);

gateway.on("message", (m) => {
  if (m.channel_id === "944125059944054844") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };

    client.sendWebhook(
      "https://discord.com/api/webhooks/1025109372344479884/k_EK49kFtGVsSc4cT8JOemVYotpYebABC1bx9c7aQHU0yAWqkPTDshJ8lNXEdy74NalN",
      content
    );
  }
});