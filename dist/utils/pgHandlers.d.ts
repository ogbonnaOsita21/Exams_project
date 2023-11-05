export declare const checkIfExamExists: (id?: number) => Promise<void>;
export declare const getExamById: (id: number) => Promise<import("../types").Exam>;
export declare const getExamSubjectsList: (id: number) => Promise<string[]>;
export declare const getExamQuestionsList: (id: number) => Promise<import("../types").Question[]>;
export declare const getSubjectById: (id: number) => Promise<import("../types").Subject>;
export declare const checkIfSubjectExists: (id?: number) => Promise<void>;
export declare const getSubjectExamList: (id: number) => Promise<string[]>;
export declare const removeSubjectExamType: (exam_id: number, subject_id: number) => Promise<boolean>;
export declare const getTopicById: (id: number) => Promise<import("../types").Topic>;
export declare const checkIfTopicExists: (id?: number) => Promise<void>;
export declare const getQuestionById: (id: number) => Promise<import("../types").Question>;
export declare const checkIfQuestionExists: (id?: number) => Promise<void>;
export declare const checkIfExamSubjectInTable: (exam_id?: number, subject_id?: number) => Promise<void>;
export declare const checkIfEmailIsCorrect: (email: string) => void;
export declare const checkIfAdminExists: (id?: number) => Promise<void>;
