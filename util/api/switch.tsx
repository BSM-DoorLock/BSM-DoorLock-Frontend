import {instance} from "../../instance/instance"
import {getAccessToken} from "../authorization"

export const switchRoom = async (number : number, data : boolean) => {
    await instance.put(
      `/room/${number}/state`,
      {
        state: data,
      },
      getAccessToken()
    );
}