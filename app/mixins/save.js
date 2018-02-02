import Mixin from '@ember/object/mixin';

export default Mixin.create({
  actions: {
    save(model){
      model.save().then(() => {
        this.transitionToRoute('books.index')
      })
    }
  }
});
