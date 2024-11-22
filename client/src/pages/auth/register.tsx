"use client"

import { useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TelaCadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [aceitarTermos, setAceitarTermos] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem.')
            return
        }
        if (!aceitarTermos) {
            alert('Você precisa aceitar os termos e condições.')
            return
        }
        router.push('/')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="w-full max-w-2xl overflow-hidden shadow-xl">
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                    <CardHeader className="space-y-1 pt-6">
                        <div className="flex items-center justify-center mb-4">
                            <BookOpen className="h-12 w-12 text-blue-500" />
                        </div>
                        <CardTitle className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                            Cadastre-se no Code Master
                        </CardTitle>
                        <CardDescription className="text-center text-gray-500 dark:text-gray-400">
                            Crie sua conta e comece sua jornada de aprendizado
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="nome" className="text-sm font-medium">Nome completo</Label>
                                    <Input
                                        id="nome"
                                        type="text"
                                        placeholder="Seu nome completo"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        required
                                        className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium">E-mail</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="seu@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="senha" className="text-sm font-medium">Senha</Label>
                                    <Input
                                        id="senha"
                                        type="password"
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                        required
                                        className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="confirmarSenha" className="text-sm font-medium">Confirmar senha</Label>
                                    <Input
                                        id="confirmarSenha"
                                        type="password"
                                        value={confirmarSenha}
                                        onChange={(e) => setConfirmarSenha(e.target.value)}
                                        required
                                        className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                                    />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="termos"
                                        checked={aceitarTermos}
                                        onCheckedChange={(checked) => setAceitarTermos(checked as boolean)}
                                    />
                                    <Label htmlFor="termos" className="text-sm text-gray-600 dark:text-gray-300">
                                        Eu aceito os <Link href="/termos" className="text-blue-500 hover:underline">termos e condições</Link>
                                    </Label>
                                </div>
                            </div>
                            <Button type="submit" className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                Criar conta
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col items-center pb-6">
                        <Link href="/auth/login" className="flex items-center text-sm text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Voltar para o login
                        </Link>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    )
}