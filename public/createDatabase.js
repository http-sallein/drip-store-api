import mysql from 'mysql2/promise';
import dotenv from 'dotenv'

import { configDB } from '../src/config/config.js';

export async function createDatabase() {

    try {

        const connection = await mysql.createConnection(
            {
                host: configDB.development.host,
                user: configDB.development.username,
                password: configDB.development.password,
            },
        );

        await connection.query(`CREATE DATABASE IF NOT EXISTS ${configDB.development.database};`);

        console.log('\n2. Database criada com sucesso.\n');

        await connection.end();

    } catch (error) { console.error('Create: Erro ao conectar no DB: ', error) }
}
