import { VStack, Icon } from 'native-base';
import { Button } from '../components/Button';
import { Header } from '../components/Header';

import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export function Pools(){
    const { navigate } = useNavigation();

    return (
        <VStack flex="1" backgroundColor="gray.900">
            <Header title="Meus Bolões"/>
            <VStack marginTop="6" marginX="5" borderBottomWidth="1" borderBottomColor="gray.600" paddingBottom="4" marginBottom="4">
                <Button title="Buscar bolão por código" 
                leftIcon={<Icon as={Octicons} 
                name="search" color="black" size="md" />}
                onPress={() => navigate('find')}/>
            </VStack>
        </VStack>
    )
}