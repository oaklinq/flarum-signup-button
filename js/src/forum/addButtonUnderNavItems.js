import app from 'flarum/app';
import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';
import Button from 'flarum/components/Button';
import SignUpModal from'flarum/components/SignUpModal';

export default function() {
    extend(IndexPage.prototype, 'sidebarItems', function(items) {
         if (typeof app.session.user === 'undefined') {
            items.add('SUEButton', Button.component({
		      children: app.translator.trans('kvothe-sub.forum.signup'),
		      className: 'Button Button--primary KvotheSub',
		      onclick: function() {app.modal.show(new SignUpModal())}
		    }), -100);
        }
    });
}