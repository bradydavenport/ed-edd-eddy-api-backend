'use strict';

class modelInterface {
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    try {
      let instance = await this.model.create(json);
      return instance;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async readAll() {
    try {
      let allRows = await this.model.findAll();
      return allRows;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async readOne(id) {
    try {
      let row = await this.model.findOne({ where: { id } });
      return row;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async update(id) {

  }

  async delete(id) {
    try {
      let row = await this.model.destroy({ where: { id } });
      return row;
    }
    catch (e) {
      console.error(e);
      return e;
    }
  }

}

module.exports = modelInterface;