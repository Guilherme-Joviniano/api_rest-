class HomeCotroller {
  async index(req, res) {
    res.json('index');
  }
}

export default new HomeCotroller();
