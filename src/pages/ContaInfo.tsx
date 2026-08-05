import { Button, Text } from "@chakra-ui/react"
import CardInfo from "../components/CardInfo"
import { useEffect, useState} from "react"
import { api } from "../api"
import {useNavigate, useParams} from "react-router-dom"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const ContaInfo = () => { 

    const [ userData, setUserData ] = useState<null | UserData>()
    const { id } = useParams()
    const navigate = useNavigate()

     useEffect(() => {
            const getData = async () => {
                const data: any | UserData = await api
                setUserData(data)
            }
    
            getData()
        },[])

        if(userData && id !== userData.id) {
        navigate('/')
    }

    return (
        <>
            <Text fontSize='3xl' fontWeight='bold'>
                Informações da conta
            </Text>
            <CardInfo mainContent={`Olá, ${userData?.name}`} content={`Email: ${userData?.email}`}/>
            <Button onClick={() => navigate(`/conta/${id}`)}>Voltar</Button>
        </>
    )
}

export default ContaInfo
