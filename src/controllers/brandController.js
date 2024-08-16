
import Brand from '../../models/brands.js';

export async function listAll() {
  const brands = await Brand.findAll();
  return brands;
}
  
  export async function listOne(id) {
    const brand = await Brand.findByPk(id);
    if (!brand) throw new Error('brand not found');
    return brand;
  }
  
  export async function create(data) {
    const brand = await Brand.create({
      nome: data.nome
    });
    return brand;
  }
  
  export async function edit(id, data) {
    const brand = await Brand.findByPk(id);
    if (!brand) throw new Error('brand not found');
    
    await brand.update(data);
    return brand;
  }
  
  export async function destroy(id) {
    const brand = await Brand.findByPk(id);
    if (!brand) throw new Error('brand not found');
    
    await brand.destroy();
  }
  