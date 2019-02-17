import app from 'flarum/app';
import SignupButtonSettingsModal from './components/SignupButtonSettingsModal';


app.initializers.add('kvothe-signup-button', () => {
	app.extensionSettings['kvothe-signup-button'] = () => app.modal.show(new SignupButtonSettingsModal());
});