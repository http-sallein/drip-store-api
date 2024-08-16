import { context } from "../src/config/context.js";

import { Category } from '../src/models/category.js';
import { ImagesProduct } from './../src/models/imagesProduct.js';
import { OptionsProduct } from './../src/models/optionsProduct.js';
import { Product } from './../src/models/product.js';
import { ProductCategory } from './../src/models/productsCategory.js';
import { User } from '../src/models/user.js';


export async function createTables() {
    
    try {

        await context.authenticate();  
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        await context.sync();
        console.log('\n3. Tabelas sincronizadas/criadas com sucesso.\n');

    } catch (error) { console.error('Erro ao sincronizar as tabelas:', error) }
}




//CRIANDO TABLE PARA AS BRANDS, PFV, AJUSTAR PARA O CÓDIGO =>
/*
CREATE TABLE tb_brands (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );
  
  INSERT INTO tb_brands
      (nome)
  VALUES
      ('Addidas');
  
  INSERT INTO tb_brands
      (nome)
  VALUES
      ('Calenciaga');
  
  INSERT INTO tb_brands
      (nome)
  VALUES
      ('K-Swiss');
  
  INSERT INTO tb_brands
      (nome)
  VALUES
      ('Nike');
  
  INSERT INTO tb_brands
      (nome)
  VALUES
      ('Puma');
  
  
  SELECT * FROM tb_brands; 
  */
