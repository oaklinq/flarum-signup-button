import app from 'flarum/app';

import addButtonUnderNavItems from './addButtonUnderNavItems';

app.initializers.add('kvothe/signup-button', () => {
   addButtonUnderNavItems();
});
