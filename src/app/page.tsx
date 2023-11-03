'use client';
import Botao from "@/components/Botao";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Main() {

	const clientes = [
		new Cliente('Ana', 34, '1'),
		new Cliente('Bia', 44, '2'),
		new Cliente('Jonas', 24, '3'),
		new Cliente('Marcela', 14, '4'),
		new Cliente('Alex', 54, '5')
	]

	function clienteSelecionado(cliente: Cliente) {
		console.log(cliente.nome)
	}

	function clienteExcluido(cliente: Cliente) {
		return cliente 
	}

	return (
		<div className={`flex justify-center items-center h-screen text-white
						bg-gradient-to-r from-blue-500 to-purple-500`}>
			<Layout titulo="Cadastro Simples">
				<div className="flex justify-end">
					<Botao cor="blue" className="mb-4">Novo Cliente</Botao>
				</div>
				<Tabela 
					clientes={clientes} 
					clienteExcluido={clienteExcluido}
					clienteSelecionado={clienteSelecionado}/>
			</Layout>
		</div>
	)
}
