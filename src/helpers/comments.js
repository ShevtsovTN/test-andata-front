import api from "@/api";
import config from "@/config";
import {reactive} from "vue";


export async function getComments(val) {
    return reactive(await api.get(config.url + (val ? '/?created_at=desc' : '')))
}