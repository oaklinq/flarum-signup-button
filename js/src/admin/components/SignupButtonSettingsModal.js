import app from 'flarum/app';
import SettingsModal from 'flarum/components/SettingsModal';
import Switch from 'flarum/components/Switch';

const settingsPrefix = 'kvothe-sub.';
const translationPrefix = 'kvothe-sub.admin.settings.';

export default class SignupButtonSettingsModal extends SettingsModal {
	title() {
        return app.translator.trans(translationPrefix + 'title');
    }

    form() {
        return [

            m('.Form-group', [
                m('label', Switch.component({
                    state: this.setting(settingsPrefix + 'hide-desktop')() > 0,
                    onchange: this.setting(settingsPrefix + 'hide-desktop'),
                    children: app.translator.trans(translationPrefix + 'field.hide-desktop'),
                })),
            ]),
            m('.Form-group', [
                m('label', Switch.component({
                    state: this.setting(settingsPrefix + 'replace-discussion-button')() > 0,
                    onchange: this.setting(settingsPrefix + 'replace-discussion-button'),
                    children: app.translator.trans(translationPrefix + 'field.replace-discussion-button'),
                })),
            ]),

        ];
    }
}