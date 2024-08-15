import { context } from "../src/config/context.js";

export async function createTables() {
    try {
        await context.authenticate();  // Verifica a conexão com o banco de dados
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        await context.sync();  // Sincroniza as tabelas
        console.log('\n3. Tabelas sincronizadas/criadas com sucesso.\n');

    } catch (error) {
        console.error('Erro ao sincronizar as tabelas:', error);
    }
}
