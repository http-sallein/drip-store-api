import { configDB } from './config/config.js';

import { createDatabase } from "../public/createDatabase.js";
import { createTables } from "../public/createTables.js";

import server from './server.js';

async function main() {

    try {

        await createDatabase();
        await createTables();

        const port = configDB.development.port || 3000;

        server.listen(port, () => console.log(`Servidor iniciado na url http://localhost:${port}.`));

    } catch (error) { console.log('Erro na execução do processo.', error) }
}

await main();
