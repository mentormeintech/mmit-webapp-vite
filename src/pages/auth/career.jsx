import React, { useState, useEffect } from 'react'
import SignupHeader from "../../components/signupheader";
import Footer from "../../components/footer";
import { useDispatch } from "react-redux";
import CareerPath from '../../components/CareerPath';
import Alert from '../../features/Alert';
import { putRequest, userGetRequest } from '../../utilities/apiClient';
import Spinner from '../../components/Spinner';
import { careerData } from '../../redux/slices/craeerSlice';
import { useNavigate } from 'react-router-dom';

export default function Career() {
    const [loading, setloading] = useState(false)
    const [careerLoading, setcareerLoading] = useState(false)
    const [careers, setcareers] = useState([])
    const [careerPath, setcareerPath] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()


    async function getCarees() {
        try {
            setloading(true);
            // await setToken()
            const response = await userGetRequest(`careers`)
            if (response && response.success === true) {
                dispatch(careerData(response.data))
                setcareers(response.data)
                setloading(false);
            }
            else {
                Alert(response.message, 'warning')
                setloading(false);
            }
        } catch (error) {
            Alert(error.message, 'error')
            setloading(false);
        }
    }

    async function createCareer(event) {
        try {
            event.preventDefault();
            if (!careerPath) {
                return Alert('Career path is empty', 'warning')
            }
            else {
                const career_paths = []
                career_paths.push(careerPath)
                setcareerLoading(true);
                const formData = {
                    career_paths: career_paths
                }
                const response = await putRequest(`mentor/career`, formData)
                if (response && response.success === true) {
                    Alert(response.message, 'success')
                    setTimeout(() => {
                        navigate('/mentorregist')
                        setcareerLoading(false);
                    }, 40);
                }
                else {
                    Alert(response.message, 'warning')
                    return setcareerLoading(false);
                }
            }
        } catch (error) {
            Alert(error.message, 'error')
            setloading(false);
        }
    }

    useEffect(() => {
        getCarees();
    }, [])

    return (
        <>
            {loading ? <Spinner /> : <>
                <div>
                    <SignupHeader />
                    <CareerPath careers={careers} setcareerPath={setcareerPath} careerPath={careerPath} createCareer={createCareer} loading={careerLoading} />
                </div>
                <Footer />
            </>}
        </>
    )
}
