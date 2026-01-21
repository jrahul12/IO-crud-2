import { Imovie, Ipost, Istd, Itodo } from "../model/data";

export const studentData: Istd[] = [
    {
        id: 'S101',
        name: 'Rahul',
        age: 23,
        course: 'Angular',
        grade: 'A'
    },
    {
        id: 'S102',
        name: 'Amit',
        age: 22,
        course: 'React',
        grade: 'B'
    },
    {
        id: 'S103',
        name: 'Priya',
        age: 24,
        course: 'Vue',
        grade: 'A+'
    }
];
export const todoData: Itodo[] = [
    {
        id: 'T001',
        title: 'Learn Angular Basics'
    },
    {
        id: 'T002',
        title: 'Practice RxJS Operators'
    },
    {
        id: 'T003',
        title: 'Build Todo App'
    },
    {
        id: 'T004',
        title: 'Revise NgRx Concepts'
    }
];
export const postData: Ipost[] = [
    {
        id: 'P001',
        title: 'Introduction to Angular',
        content: 'Angular is a powerful frontend framework for building SPA applications.'
    },
    {
        id: 'P002',
        title: 'Understanding Components',
        content: 'Components are the building blocks of an Angular application.'
    },
    {
        id: 'P003',
        title: 'RxJS Basics',
        content: 'RxJS helps manage asynchronous data using Observables.'
    },
    {
        id: 'P004',
        title: 'NgRx State Management',
        content: 'NgRx provides a reactive state management solution for Angular apps.'
    }
];
export const movieData: Imovie[] = [

    {
        id: "3",
        title: "The Dark Knight",
        description: "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
        rating: 9.0,
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
        id: "4",
        title: "Avengers: Endgame",
        description: "The Avengers assemble once more to reverse Thanos' actions.",
        rating: 8.4,
        image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    },
    {
        id: "5",
        title: "Joker",
        description: "A failed comedian descends into madness and becomes Gotham's most feared villain.",
        rating: 8.5,
        image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
    },
    {
        id: "6",
        title: "Titanic",
        description: "A love story unfolds aboard the ill-fated RMS Titanic.",
        rating: 7.9,
        image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
    }
];