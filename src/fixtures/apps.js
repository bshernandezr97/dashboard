import { ref } from "vue"

export default () => {
    const apps = ref(
        [
            {
                id: 1,
                name: "App2",
                status: "Activa",
                fails: 4
            },
            {
                id: 2,
                name: "App2",
                status: "Error",
                fails: 0
            },
            {
                id: 3,
                name: "App3",
                status: "Activa",
                fails: 1
            },
            {
                id: 4,
                name: "App4",
                status: "Activa",
                fails: 0
            },
            {
                id: 5,
                name: "App5",
                status: "Activa",
                fails: 15
            }
        ]
    )
    return {apps}
}