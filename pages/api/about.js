import nc from "next-connect";
import { getAbout } from "../../controller";

const handler = nc();
handler.get(getAbout);
export default handler;
