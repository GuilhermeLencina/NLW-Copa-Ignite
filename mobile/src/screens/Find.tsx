import { Heading, VStack } from 'native-base';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Find(){
    return (
        <VStack flex="1" backgroundColor="gray.900">
            <Header title='Buscar por código' showBackButton />
            <VStack marginTop="8" marginX="5" alignItems="center">
                <Heading fontFamily="heading" color="white" fontSize="xl" marginBottom="8" textAlign="center">
                Encontre um bolão através de {'\n'} seu código único</Heading>
                <Input marginBottom="2" placeholder='Qual o código do bolão?'/>
                <Button title="Buscar Bolão" />
            </VStack>
        </VStack>
    )
}