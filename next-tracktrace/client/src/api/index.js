class Api {
  constructor(entity) {
    this.entity = entity;
    console.log(entity);
  }

  getAllCards = async () => {
    console.log("in getApi");

    const r = await fetch(`/api/${this.entity}`, this.getOptions(`get`));
    return await r.json();
  };

  getCardById = async id => {
    console.log("ID", id);
    // console.log("Get card by Id: ", obj.uniqueId);
    const r = await fetch(`/api/${this.entity}/${id}`, this.getOptions(`get`));
    return await r.json();
  };

  createCard = async obj => {
    console.log(obj);

    const r = await fetch(`/api/${this.entity}`, this.getOptions(`post`, obj));
    return await r.json();
  };

  answerCard = async obj => {
    const r = await fetch(
      `/api/${this.entity}/${obj.id}`,
      this.getOptions(`put`, obj)
    );
    return await r.json();
  };

  getOptions = (method, body = null) => {
    const options = {
      method: method.toUpperCase(),
      headers: {
        "content-type": `application/json`
      }
    };
    console.log("in getOptions", options);

    if (body) {
      options.body = JSON.stringify(body);
    }
    return options;
  };
}

export default Api;
