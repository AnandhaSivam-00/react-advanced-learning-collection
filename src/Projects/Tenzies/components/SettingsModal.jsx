import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Switch, ConfigProvider, notification } from 'antd'

import { clearUserError, fetchUserSettingData, updateUserSettingsData } from '../redux/features/userSlice'

const SettingsModal = ({ isSettingsModalOpen, setIsSettingsModalOpen }) => {
    const { credential } = useSelector((state) => state.auth);
    const { loading, error, settingsData } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [settings, setSettings] = useState(settingsData);

    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        if(isSettingsModalOpen && credential?.uid && !settingsData) {
            dispatch(fetchUserSettingData(credential.uid));
        }

        if(error) {
            api.error({
                placement: 'bottomRight',
                title: 'Failed to fetch the user\'s settings data',
                description: `Try again by login... This is due to network error ${error}`
            });
            dispatch(clearUserError());
        }
    }, [isSettingsModalOpen, dispatch, credential?.uid, error, api]);

    useEffect(() => {
        if(settingsData && Object.keys(settingsData).length > 0) {
            setSettings(settingsData);
        }
    }, [settingsData]);

    const handleSave = () => {
        dispatch(clearUserError());

        dispatch(updateUserSettingsData({
            settingsData: settings,
            userId: credential.uid
        })).unwrap();

        setIsSettingsModalOpen(prev => !prev);

        api.success({
            placement: 'bottomRight',
            title: 'Data saved!',
            description: `User settings data saved successfully...`
        })
    }

    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            colorPrimary: '#882cde',
                            colorPrimaryHover: '#882cdee2',
                            colorPrimaryActive: '#9b31ff',
                        },
                        Switch: {
                            colorPrimary: '#59E391',
                            colorPrimaryHover: '#43bf74',
                            colorPrimaryActive: '#9b31ff',
                        }
                    },
                }}
            >
                <Modal
                    title={<h2><b>Settings</b></h2>}
                    open={isSettingsModalOpen}
                    loading={loading}
                    closable={false}
                    mask={{ closable: false }}
                    centered
                    okText='Save'
                    okType='primary'
                    onOk={handleSave}
                    cancelText='Cancel'
                    onCancel={() => {
                        dispatch(clearUserError());
                        setIsSettingsModalOpen(prev => !prev)
                    }}
                >
                    <div className='row row-cols-2 my-3 gy-3 container'>
                        <div className='col-6'>
                            <p className='m-0 p-0'>Trail mode</p>
                        </div>
                        <div className='col-6 w-50'>
                            <div className='d-flex justify-content-end'>
                                <Switch
                                    checked={settings.trail_mode}
                                    onChange={(checked) => setSettings(prev => ({ ...prev, trail_mode: checked }))}
                                />
                            </div>
                        </div>
                        <div className='col-6'>
                            <p className='m-0 p-0'>Dark mode</p>
                        </div>
                        <div className='col-6 w-50'>
                            <div className='d-flex justify-content-end'>
                                <Switch
                                    checked={settings.dark_mode}
                                    onChange={(checked) => setSettings(prev => ({ ...prev, dark_mode: checked }))}
                                />
                            </div>
                        </div>
                        <div className='col-6'>
                            <p className='m-0 p-0'>Show on Leader Board</p>
                        </div>
                        <div className='col-6 w-50'>
                            <div className='d-flex justify-content-end'>
                                <Switch
                                    checked={settings.show_on_lb}
                                    onChange={(checked) => setSettings(prev => ({ ...prev, show_on_lb: checked }))}
                                />
                            </div>
                        </div>
                        <div className='col-6'>
                            <p className='m-0 p-0'>Send Emails</p>
                        </div>
                        <div className='col-6 w-50'>
                            <div className='d-flex justify-content-end'>
                                <Switch
                                    checked={settings.send_emails}
                                    onChange={(checked) => setSettings(prev => ({ ...prev, send_emails: checked }))}
                                />
                            </div>
                        </div>
                    </div>
                </Modal>
            </ConfigProvider>
            {contextHolder}
        </>
    )
}

export default SettingsModal