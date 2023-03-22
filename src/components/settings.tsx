import React, { useContext, useEffect, useState } from 'react';
import Button from './button';
import Gear from './gear-solid.svg'
import { Formik } from 'formik';
import { Context } from '../context';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

export default function Settings() {
    const { t, i18n } = useTranslation();
    const [isOpen, setOpen] = useState(false);
    const { settings, setSettings }: any = useContext(Context);
    const [lang, setLang]: any = useState(i18n.language);



    const toggle = () => setOpen(!isOpen);

    const saveSettings = (values: any, { setSubmitting }: any) => {
        setSubmitting(true);
        setSettings(values);
        toggle();
        i18n.changeLanguage(lang);
    }

    return (
        <div className="absolute top-3 right-3">
            <img src={Gear} onClick={toggle} className="w-5 h-5 ml-auto mb-2" />
            {isOpen && <div className="bg-stone-100 shadow rounded p-10 ">
                <p>{t('saveDescription')}</p>
                <Formik
                    initialValues={settings}
                    onSubmit={saveSettings}
                >
                    {({ handleSubmit, handleChange }) => (
                        <form onSubmit={handleSubmit}>
                            <div className='mt-3 grid grid-cols-2 gap-y-3.5'>
                                <div>{t('lang')}</div>
                                <div className='flex justify-around'>
                                    <img src="assets/usa.png" onClick={() => setLang('en')} className={`w-6 h-6 ${lang === 'en' ? 'active' : ''}`} />
                                    <img src="assets/espana.png" onClick={() => setLang('es')} className={`w-6 h-6 ${lang === 'es' ? 'active' : ''}`} />
                                </div>
                                <div>{t('workTime')}</div>
                                <div><input min="1" type="number" name="workTime" onChange={handleChange} defaultValue={settings.workTime} /></div>
                                <div>{t('shortBreak')}</div>
                                <div><input min="1" type="number" name="shortBreak" onChange={handleChange} defaultValue={settings.shortBreak} /></div>
                                <div>{t('longBreak')}</div>
                                <div><input min="1" type="number" name="longBreak" onChange={handleChange} defaultValue={settings.longBreak} /></div>
                                <div>{t('sound')}</div>
                                <div>
                                    <select className="w-full" onChange={handleChange} name="sound" disabled>
                                        <option value={settings.sound} >{settings.sound.split('/')[1].split('.')[0]}</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex justify-end mt-5'>
                                <Button type="submit" >{t('save')}</Button>
                            </div>
                        </form>
                    )}
                </Formik>


            </div>}
        </div>
    )
}