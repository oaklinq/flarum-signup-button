import app from 'flarum/app';
import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';
import Button from 'flarum/components/Button';
import SignUpModal from'flarum/components/SignUpModal';

export default function() {
    extend(IndexPage.prototype, 'sidebarItems', function(items) {
    	const replaceBool= app.forum.attribute('kvothe-sub.replace-discussion-button');
    	const classes = app.forum.attribute('kvothe-sub.hide-desktop') ? 'Button Button--primary KvotheSub KvotheSub--hidden' : 'Button Button--primary KvotheSub';
    	const priority = replaceBool ? 110 : -90;

        if (typeof app.session.user === 'undefined') {
            items.add('SUEButton', Button.component({
		      children: app.translator.trans('kvothe-sub.forum.signup'),
		      className: classes,
		      onclick: function() {app.modal.show(new SignUpModal())}
		    }), priority);
		    if(replaceBool){
		    	items.remove('newDiscussion');
		    }
        }

    });
}