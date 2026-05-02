import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { CreatePatientBody, CreateProcessBody, CreateReportBody, CreateTrainingBody, DashboardKpis, DashboardSummary, HealthStatus, ListPatientsParams, ListProcessesParams, ListRecentProcessesParams, ListReportsParams, Patient, Process, Report, StatusCount, Training } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Listar pacientes
 */
export declare const getListPatientsUrl: (params?: ListPatientsParams) => string;
export declare const listPatients: (params?: ListPatientsParams, options?: RequestInit) => Promise<Patient[]>;
export declare const getListPatientsQueryKey: (params?: ListPatientsParams) => readonly ["/api/patients", ...ListPatientsParams[]];
export declare const getListPatientsQueryOptions: <TData = Awaited<ReturnType<typeof listPatients>>, TError = ErrorType<unknown>>(params?: ListPatientsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPatients>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listPatients>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListPatientsQueryResult = NonNullable<Awaited<ReturnType<typeof listPatients>>>;
export type ListPatientsQueryError = ErrorType<unknown>;
/**
 * @summary Listar pacientes
 */
export declare function useListPatients<TData = Awaited<ReturnType<typeof listPatients>>, TError = ErrorType<unknown>>(params?: ListPatientsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPatients>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Criar paciente
 */
export declare const getCreatePatientUrl: () => string;
export declare const createPatient: (createPatientBody: CreatePatientBody, options?: RequestInit) => Promise<Patient>;
export declare const getCreatePatientMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createPatient>>, TError, {
        data: BodyType<CreatePatientBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createPatient>>, TError, {
    data: BodyType<CreatePatientBody>;
}, TContext>;
export type CreatePatientMutationResult = NonNullable<Awaited<ReturnType<typeof createPatient>>>;
export type CreatePatientMutationBody = BodyType<CreatePatientBody>;
export type CreatePatientMutationError = ErrorType<unknown>;
/**
 * @summary Criar paciente
 */
export declare const useCreatePatient: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createPatient>>, TError, {
        data: BodyType<CreatePatientBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createPatient>>, TError, {
    data: BodyType<CreatePatientBody>;
}, TContext>;
/**
 * @summary Obter paciente por ID
 */
export declare const getGetPatientUrl: (id: number) => string;
export declare const getPatient: (id: number, options?: RequestInit) => Promise<Patient>;
export declare const getGetPatientQueryKey: (id: number) => readonly [`/api/patients/${number}`];
export declare const getGetPatientQueryOptions: <TData = Awaited<ReturnType<typeof getPatient>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPatient>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPatient>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPatientQueryResult = NonNullable<Awaited<ReturnType<typeof getPatient>>>;
export type GetPatientQueryError = ErrorType<void>;
/**
 * @summary Obter paciente por ID
 */
export declare function useGetPatient<TData = Awaited<ReturnType<typeof getPatient>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPatient>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Atualizar paciente
 */
export declare const getUpdatePatientUrl: (id: number) => string;
export declare const updatePatient: (id: number, createPatientBody: CreatePatientBody, options?: RequestInit) => Promise<Patient>;
export declare const getUpdatePatientMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updatePatient>>, TError, {
        id: number;
        data: BodyType<CreatePatientBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updatePatient>>, TError, {
    id: number;
    data: BodyType<CreatePatientBody>;
}, TContext>;
export type UpdatePatientMutationResult = NonNullable<Awaited<ReturnType<typeof updatePatient>>>;
export type UpdatePatientMutationBody = BodyType<CreatePatientBody>;
export type UpdatePatientMutationError = ErrorType<unknown>;
/**
 * @summary Atualizar paciente
 */
export declare const useUpdatePatient: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updatePatient>>, TError, {
        id: number;
        data: BodyType<CreatePatientBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updatePatient>>, TError, {
    id: number;
    data: BodyType<CreatePatientBody>;
}, TContext>;
/**
 * @summary Listar relatórios técnicos
 */
export declare const getListReportsUrl: (params?: ListReportsParams) => string;
export declare const listReports: (params?: ListReportsParams, options?: RequestInit) => Promise<Report[]>;
export declare const getListReportsQueryKey: (params?: ListReportsParams) => readonly ["/api/reports", ...ListReportsParams[]];
export declare const getListReportsQueryOptions: <TData = Awaited<ReturnType<typeof listReports>>, TError = ErrorType<unknown>>(params?: ListReportsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listReports>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listReports>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListReportsQueryResult = NonNullable<Awaited<ReturnType<typeof listReports>>>;
export type ListReportsQueryError = ErrorType<unknown>;
/**
 * @summary Listar relatórios técnicos
 */
export declare function useListReports<TData = Awaited<ReturnType<typeof listReports>>, TError = ErrorType<unknown>>(params?: ListReportsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listReports>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Criar relatório técnico
 */
export declare const getCreateReportUrl: () => string;
export declare const createReport: (createReportBody: CreateReportBody, options?: RequestInit) => Promise<Report>;
export declare const getCreateReportMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createReport>>, TError, {
        data: BodyType<CreateReportBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createReport>>, TError, {
    data: BodyType<CreateReportBody>;
}, TContext>;
export type CreateReportMutationResult = NonNullable<Awaited<ReturnType<typeof createReport>>>;
export type CreateReportMutationBody = BodyType<CreateReportBody>;
export type CreateReportMutationError = ErrorType<unknown>;
/**
 * @summary Criar relatório técnico
 */
export declare const useCreateReport: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createReport>>, TError, {
        data: BodyType<CreateReportBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createReport>>, TError, {
    data: BodyType<CreateReportBody>;
}, TContext>;
/**
 * @summary Obter relatório por ID
 */
export declare const getGetReportUrl: (id: number) => string;
export declare const getReport: (id: number, options?: RequestInit) => Promise<Report>;
export declare const getGetReportQueryKey: (id: number) => readonly [`/api/reports/${number}`];
export declare const getGetReportQueryOptions: <TData = Awaited<ReturnType<typeof getReport>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getReport>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getReport>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetReportQueryResult = NonNullable<Awaited<ReturnType<typeof getReport>>>;
export type GetReportQueryError = ErrorType<void>;
/**
 * @summary Obter relatório por ID
 */
export declare function useGetReport<TData = Awaited<ReturnType<typeof getReport>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getReport>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Atualizar relatório
 */
export declare const getUpdateReportUrl: (id: number) => string;
export declare const updateReport: (id: number, createReportBody: CreateReportBody, options?: RequestInit) => Promise<Report>;
export declare const getUpdateReportMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateReport>>, TError, {
        id: number;
        data: BodyType<CreateReportBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateReport>>, TError, {
    id: number;
    data: BodyType<CreateReportBody>;
}, TContext>;
export type UpdateReportMutationResult = NonNullable<Awaited<ReturnType<typeof updateReport>>>;
export type UpdateReportMutationBody = BodyType<CreateReportBody>;
export type UpdateReportMutationError = ErrorType<unknown>;
/**
 * @summary Atualizar relatório
 */
export declare const useUpdateReport: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateReport>>, TError, {
        id: number;
        data: BodyType<CreateReportBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateReport>>, TError, {
    id: number;
    data: BodyType<CreateReportBody>;
}, TContext>;
/**
 * @summary Excluir relatório
 */
export declare const getDeleteReportUrl: (id: number) => string;
export declare const deleteReport: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteReportMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteReport>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteReport>>, TError, {
    id: number;
}, TContext>;
export type DeleteReportMutationResult = NonNullable<Awaited<ReturnType<typeof deleteReport>>>;
export type DeleteReportMutationError = ErrorType<unknown>;
/**
 * @summary Excluir relatório
 */
export declare const useDeleteReport: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteReport>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteReport>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Listar processos previdenciários
 */
export declare const getListProcessesUrl: (params?: ListProcessesParams) => string;
export declare const listProcesses: (params?: ListProcessesParams, options?: RequestInit) => Promise<Process[]>;
export declare const getListProcessesQueryKey: (params?: ListProcessesParams) => readonly ["/api/processes", ...ListProcessesParams[]];
export declare const getListProcessesQueryOptions: <TData = Awaited<ReturnType<typeof listProcesses>>, TError = ErrorType<unknown>>(params?: ListProcessesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listProcesses>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listProcesses>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListProcessesQueryResult = NonNullable<Awaited<ReturnType<typeof listProcesses>>>;
export type ListProcessesQueryError = ErrorType<unknown>;
/**
 * @summary Listar processos previdenciários
 */
export declare function useListProcesses<TData = Awaited<ReturnType<typeof listProcesses>>, TError = ErrorType<unknown>>(params?: ListProcessesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listProcesses>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Criar processo previdenciário
 */
export declare const getCreateProcessUrl: () => string;
export declare const createProcess: (createProcessBody: CreateProcessBody, options?: RequestInit) => Promise<Process>;
export declare const getCreateProcessMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createProcess>>, TError, {
        data: BodyType<CreateProcessBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createProcess>>, TError, {
    data: BodyType<CreateProcessBody>;
}, TContext>;
export type CreateProcessMutationResult = NonNullable<Awaited<ReturnType<typeof createProcess>>>;
export type CreateProcessMutationBody = BodyType<CreateProcessBody>;
export type CreateProcessMutationError = ErrorType<unknown>;
/**
 * @summary Criar processo previdenciário
 */
export declare const useCreateProcess: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createProcess>>, TError, {
        data: BodyType<CreateProcessBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createProcess>>, TError, {
    data: BodyType<CreateProcessBody>;
}, TContext>;
/**
 * @summary Obter processo por ID
 */
export declare const getGetProcessUrl: (id: number) => string;
export declare const getProcess: (id: number, options?: RequestInit) => Promise<Process>;
export declare const getGetProcessQueryKey: (id: number) => readonly [`/api/processes/${number}`];
export declare const getGetProcessQueryOptions: <TData = Awaited<ReturnType<typeof getProcess>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProcess>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getProcess>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetProcessQueryResult = NonNullable<Awaited<ReturnType<typeof getProcess>>>;
export type GetProcessQueryError = ErrorType<void>;
/**
 * @summary Obter processo por ID
 */
export declare function useGetProcess<TData = Awaited<ReturnType<typeof getProcess>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProcess>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Atualizar processo
 */
export declare const getUpdateProcessUrl: (id: number) => string;
export declare const updateProcess: (id: number, createProcessBody: CreateProcessBody, options?: RequestInit) => Promise<Process>;
export declare const getUpdateProcessMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateProcess>>, TError, {
        id: number;
        data: BodyType<CreateProcessBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateProcess>>, TError, {
    id: number;
    data: BodyType<CreateProcessBody>;
}, TContext>;
export type UpdateProcessMutationResult = NonNullable<Awaited<ReturnType<typeof updateProcess>>>;
export type UpdateProcessMutationBody = BodyType<CreateProcessBody>;
export type UpdateProcessMutationError = ErrorType<unknown>;
/**
 * @summary Atualizar processo
 */
export declare const useUpdateProcess: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateProcess>>, TError, {
        id: number;
        data: BodyType<CreateProcessBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateProcess>>, TError, {
    id: number;
    data: BodyType<CreateProcessBody>;
}, TContext>;
/**
 * @summary Processos recentes (feed de atividade)
 */
export declare const getListRecentProcessesUrl: (params?: ListRecentProcessesParams) => string;
export declare const listRecentProcesses: (params?: ListRecentProcessesParams, options?: RequestInit) => Promise<Process[]>;
export declare const getListRecentProcessesQueryKey: (params?: ListRecentProcessesParams) => readonly ["/api/processes/recent", ...ListRecentProcessesParams[]];
export declare const getListRecentProcessesQueryOptions: <TData = Awaited<ReturnType<typeof listRecentProcesses>>, TError = ErrorType<unknown>>(params?: ListRecentProcessesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listRecentProcesses>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listRecentProcesses>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListRecentProcessesQueryResult = NonNullable<Awaited<ReturnType<typeof listRecentProcesses>>>;
export type ListRecentProcessesQueryError = ErrorType<unknown>;
/**
 * @summary Processos recentes (feed de atividade)
 */
export declare function useListRecentProcesses<TData = Awaited<ReturnType<typeof listRecentProcesses>>, TError = ErrorType<unknown>>(params?: ListRecentProcessesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listRecentProcesses>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Listar treinamentos
 */
export declare const getListTrainingsUrl: () => string;
export declare const listTrainings: (options?: RequestInit) => Promise<Training[]>;
export declare const getListTrainingsQueryKey: () => readonly ["/api/trainings"];
export declare const getListTrainingsQueryOptions: <TData = Awaited<ReturnType<typeof listTrainings>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTrainings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listTrainings>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListTrainingsQueryResult = NonNullable<Awaited<ReturnType<typeof listTrainings>>>;
export type ListTrainingsQueryError = ErrorType<unknown>;
/**
 * @summary Listar treinamentos
 */
export declare function useListTrainings<TData = Awaited<ReturnType<typeof listTrainings>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTrainings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Criar treinamento
 */
export declare const getCreateTrainingUrl: () => string;
export declare const createTraining: (createTrainingBody: CreateTrainingBody, options?: RequestInit) => Promise<Training>;
export declare const getCreateTrainingMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createTraining>>, TError, {
        data: BodyType<CreateTrainingBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createTraining>>, TError, {
    data: BodyType<CreateTrainingBody>;
}, TContext>;
export type CreateTrainingMutationResult = NonNullable<Awaited<ReturnType<typeof createTraining>>>;
export type CreateTrainingMutationBody = BodyType<CreateTrainingBody>;
export type CreateTrainingMutationError = ErrorType<unknown>;
/**
 * @summary Criar treinamento
 */
export declare const useCreateTraining: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createTraining>>, TError, {
        data: BodyType<CreateTrainingBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createTraining>>, TError, {
    data: BodyType<CreateTrainingBody>;
}, TContext>;
/**
 * @summary Atualizar treinamento
 */
export declare const getUpdateTrainingUrl: (id: number) => string;
export declare const updateTraining: (id: number, createTrainingBody: CreateTrainingBody, options?: RequestInit) => Promise<Training>;
export declare const getUpdateTrainingMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateTraining>>, TError, {
        id: number;
        data: BodyType<CreateTrainingBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateTraining>>, TError, {
    id: number;
    data: BodyType<CreateTrainingBody>;
}, TContext>;
export type UpdateTrainingMutationResult = NonNullable<Awaited<ReturnType<typeof updateTraining>>>;
export type UpdateTrainingMutationBody = BodyType<CreateTrainingBody>;
export type UpdateTrainingMutationError = ErrorType<unknown>;
/**
 * @summary Atualizar treinamento
 */
export declare const useUpdateTraining: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateTraining>>, TError, {
        id: number;
        data: BodyType<CreateTrainingBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateTraining>>, TError, {
    id: number;
    data: BodyType<CreateTrainingBody>;
}, TContext>;
/**
 * @summary Excluir treinamento
 */
export declare const getDeleteTrainingUrl: (id: number) => string;
export declare const deleteTraining: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteTrainingMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteTraining>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteTraining>>, TError, {
    id: number;
}, TContext>;
export type DeleteTrainingMutationResult = NonNullable<Awaited<ReturnType<typeof deleteTraining>>>;
export type DeleteTrainingMutationError = ErrorType<unknown>;
/**
 * @summary Excluir treinamento
 */
export declare const useDeleteTraining: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteTraining>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteTraining>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Resumo geral do dashboard
 */
export declare const getGetDashboardSummaryUrl: () => string;
export declare const getDashboardSummary: (options?: RequestInit) => Promise<DashboardSummary>;
export declare const getGetDashboardSummaryQueryKey: () => readonly ["/api/dashboard/summary"];
export declare const getGetDashboardSummaryQueryOptions: <TData = Awaited<ReturnType<typeof getDashboardSummary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDashboardSummaryQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboardSummary>>>;
export type GetDashboardSummaryQueryError = ErrorType<unknown>;
/**
 * @summary Resumo geral do dashboard
 */
export declare function useGetDashboardSummary<TData = Awaited<ReturnType<typeof getDashboardSummary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Indicadores de desempenho (KPIs)
 */
export declare const getGetDashboardKpisUrl: () => string;
export declare const getDashboardKpis: (options?: RequestInit) => Promise<DashboardKpis>;
export declare const getGetDashboardKpisQueryKey: () => readonly ["/api/dashboard/kpis"];
export declare const getGetDashboardKpisQueryOptions: <TData = Awaited<ReturnType<typeof getDashboardKpis>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardKpis>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDashboardKpis>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDashboardKpisQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboardKpis>>>;
export type GetDashboardKpisQueryError = ErrorType<unknown>;
/**
 * @summary Indicadores de desempenho (KPIs)
 */
export declare function useGetDashboardKpis<TData = Awaited<ReturnType<typeof getDashboardKpis>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardKpis>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Distribuição de processos por status
 */
export declare const getGetDashboardProcessStatusUrl: () => string;
export declare const getDashboardProcessStatus: (options?: RequestInit) => Promise<StatusCount[]>;
export declare const getGetDashboardProcessStatusQueryKey: () => readonly ["/api/dashboard/process-status"];
export declare const getGetDashboardProcessStatusQueryOptions: <TData = Awaited<ReturnType<typeof getDashboardProcessStatus>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardProcessStatus>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDashboardProcessStatus>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDashboardProcessStatusQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboardProcessStatus>>>;
export type GetDashboardProcessStatusQueryError = ErrorType<unknown>;
/**
 * @summary Distribuição de processos por status
 */
export declare function useGetDashboardProcessStatus<TData = Awaited<ReturnType<typeof getDashboardProcessStatus>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardProcessStatus>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map