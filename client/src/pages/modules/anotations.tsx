"use client";

import * as React from "react";
import MainLayout from "@/components/Navigation/MainLayout";
import { categories } from "@/types/categoriesCourse";

interface Anotacao {
    id: number;
    curso: string;
    aula: string;
    text: string;
}

const Anotations: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = React.useState<string>("");
    const [anotacoes, setAnotacoes] = React.useState<Anotacao[]>([]);

    React.useEffect(() => {
        const fetchAnotacoes = async () => {
            const fetchedAnotacoes: Anotacao[] = [
                { id: 1, curso: "HTML", aula: "Funções e Objetos", text: "Dicas sobre tags." },
                { id: 2, curso: "CSS", aula: "Promises", text: "Entendendo Promises." },
                { id: 2, curso: "JavaScript", aula: "Promises", text: "Entendendo Promises." },
                { id: 2, curso: "JavaScript", aula: "Promises", text: "Entendendo Promises." },
                { id: 2, curso: "JavaScript", aula: "Promises", text: "Entendendo Promises." },
                { id: 3, curso: "Next.js", aula: "Introdução ao Node", text: "Primeira anotação sobre Node." },
                { id: 3, curso: "Node.js", aula: "Introdução ao Node", text: "Primeira anotação sobre Node." },
                { id: 4, curso: "Node.js", aula: "Middleware", text: "Como funcionam os middlewares." },
                { id: 5, curso: "React", aula: "Introdução ao React", text: "Primeira anotação sobre o React." },
            ];
            setAnotacoes(fetchedAnotacoes);
        };
        fetchAnotacoes();
    }, []);

    const anotacoesPorCurso: Record<string, Anotacao[]> = anotacoes.reduce((acc, anotacao) => {
        if (!acc[anotacao.curso]) {
            acc[anotacao.curso] = [];
        }
        acc[anotacao.curso].push(anotacao);
        return acc;
    }, {} as Record<string, Anotacao[]>);

    const filteredCourses: string[] = selectedCategory
        ? categories.find(cat => cat.title === selectedCategory)?.courses.map(course => course.name) || []
        : [];

    return (
        <MainLayout>
            <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">Anotações</h1>

                <div className="mb-4">
                    <label htmlFor="course-filter" className="block mb-2 text-gray-700 dark:text-gray-200">Filtrar por Categoria:</label>
                    <select
                        id="course-filter"
                        className="block w-full p-2 border border-gray-300 rounded-md dark:bg-gray-600 dark:text-gray-200 dark:border-gray-700"
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        value={selectedCategory}
                    >
                        <option value="">Todas as Categorias</option>
                        {categories.map((category) => (
                            <option key={category.title} value={category.title}>
                                {category.title}
                            </option>
                        ))}
                    </select>
                </div>

                {Object.entries(anotacoesPorCurso).length === 0 ? (
                    <p className="text-lg text-gray-600 text-center dark:text-gray-300">Nenhuma anotação disponível.</p>
                ) : (
                    Object.entries(anotacoesPorCurso).map(([curso, anotacoes]) => {
                        const belongsToSelectedCategory = selectedCategory
                            ? filteredCourses.includes(curso)
                            : true;

                        return belongsToSelectedCategory ? (
                            <div key={curso} className="mb-6">
                                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">{curso}:</h2>
                                <ul className="space-y-2 mt-2">
                                    {anotacoes.map((anotacao) => (
                                        <li key={anotacao.id} className="bg-gray-50 p-4 rounded-md shadow hover:bg-gray-100 transition-colors duration-200 dark:bg-gray-700 dark:hover:bg-gray-600">
                                            {anotacao.text} - Aula: <span className="text-gray-500 italic dark:text-gray-300">{anotacao.aula}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null;
                    })
                )}
            </div>
        </MainLayout>
    );
};

export default Anotations;