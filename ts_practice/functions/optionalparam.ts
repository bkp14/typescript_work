function tool(id: number, name: string, env?: string) {
    console.log(id, " ", name);

    if (env != undefined) {
        con(env);
    }

    function con(env: string) {
        console.log(env);
    }
}

tool(1, "github");
tool(2, "jira", "windows7 and greater");