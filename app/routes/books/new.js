import Route from '@ember/routing/route';
import SaveMixin from 'campus/mixins/save'
export default Route.extend(SaveMixin, {
    model(){
      return this.store.createRecord('book');
    },


});
