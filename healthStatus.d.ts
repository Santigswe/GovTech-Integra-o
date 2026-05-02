openapi: 3.1.0
info:
  # Do not change the title, if the title changes, the import paths will be broken
  title: Api
  version: 0.1.0
  description: CAPSLink - Plataforma de integração CAPS e INSS
servers:
  - url: /api
    description: Base API path
tags:
  - name: health
    description: Health operations
  - name: patients
    description: Pacientes atendidos pelo CAPS
  - name: reports
    description: Relatórios técnicos padronizados
  - name: processes
    description: Processos previdenciários no INSS
  - name: trainings
    description: Treinamentos de equipe
  - name: dashboard
    description: Indicadores e resumo
paths:
  /healthz:
    get:
      operationId: healthCheck
      tags: [health]
      summary: Health check
      responses:
        "200":
          description: Healthy
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/HealthStatus"

  /patients:
    get:
      operationId: listPatients
      tags: [patients]
      summary: Listar pacientes
      parameters:
        - name: search
          in: query
          schema:
            type: string
        - name: status
          in: query
          schema:
            type: string
            enum: [ativo, inativo, em_avaliacao]
      responses:
        "200":
          description: Lista de pacientes
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Patient"
    post:
      operationId: createPatient
      tags: [patients]
      summary: Criar paciente
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/CreatePatientBody"
      responses:
        "201":
          description: Paciente criado
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Patient"

  /patients/{id}:
    get:
      operationId: getPatient
      tags: [patients]
      summary: Obter paciente por ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description: Paciente encontrado
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Patient"
        "404":
          description: Não encontrado
    put:
      operationId: updatePatient
      tags: [patients]
      summary: Atualizar paciente
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/CreatePatientBody"
      responses:
        "200":
          description: Paciente atualizado
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Patient"

  /reports:
    get:
      operationId: listReports
      tags: [reports]
      summary: Listar relatórios técnicos
      parameters:
        - name: patientId
          in: query
          schema:
            type: integer
        - name: status
          in: query
          schema:
            type: string
            enum: [rascunho, pendente_revisao, aprovado, enviado_inss]
      responses:
        "200":
          description: Lista de relatórios
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Report"
    post:
      operationId: createReport
      tags: [reports]
      summary: Criar relatório técnico
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/CreateReportBody"
      responses:
        "201":
          description: Relatório criado
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Report"

  /reports/{id}:
    get:
      operationId: getReport
      tags: [reports]
      summary: Obter relatório por ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description: Relatório encontrado
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Report"
        "404":
          description: Não encontrado
    put:
      operationId: updateReport
      tags: [reports]
      summary: Atualizar relatório
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/CreateReportBody"
      responses:
        "200":
          description: Relatório atualizado
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Report"
    delete:
      operationId: deleteReport
      tags: [reports]
      summary: Excluir relatório
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        "204":
          description: Excluído com sucesso

  /processes:
    get:
      operationId: listProcesses
      tags: [processes]
      summary: Listar processos previdenciários
      parameters:
        - name: patientId
          in: query
          schema:
            type: integer
        - name: status
          in: query
          schema:
            type: string
            enum: [em_andamento, deferido, indeferido, recurso, judicializado]
      responses:
        "200":
          description: Lista de processos
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Process"
    post:
      operationId: createProcess
      tags: [processes]
      summary: Criar processo previdenciário
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/CreateProcessBody"
      responses:
        "201":
          description: Processo criado
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Process"

  /processes/{id}:
    get:
      operationId: getProcess
      tags: [processes]
      summary: Obter processo por ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description: Processo encontrado
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Process"
        "404":
          description: Não encontrado
    put:
      operationId: updateProcess
      tags: [processes]
      summary: Atualizar processo
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/CreateProcessBody"
      responses:
        "200":
          description: Processo atualizado
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Process"

  /processes/recent:
    get:
      operationId: listRecentProcesses
      tags: [processes]
      summary: Processos recentes (feed de atividade)
      parameters:
        - name: limit
          in: query
          schema:
            type: integer
            default: 10
      responses:
        "200":
          description: Processos recentes
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Process"

  /trainings:
    get:
      operationId: listTrainings
      tags: [trainings]
      summary: Listar treinamentos
      responses:
        "200":
          description: Lista de treinamentos
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Training"
    post:
      operationId: createTraining
      tags: [trainings]
      summary: Criar treinamento
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/CreateTrainingBody"
      responses:
        "201":
          description: Treinamento criado
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Training"

  /trainings/{id}:
    put:
      operationId: updateTraining
      tags: [trainings]
      summary: Atualizar treinamento
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/CreateTrainingBody"
      responses:
        "200":
          description: Treinamento atualizado
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Training"
    delete:
      operationId: deleteTraining
      tags: [trainings]
      summary: Excluir treinamento
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        "204":
          description: Excluído com sucesso

  /dashboard/summary:
    get:
      operationId: getDashboardSummary
      tags: [dashboard]
      summary: Resumo geral do dashboard
      responses:
        "200":
          description: Resumo com totais e contagens
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/DashboardSummary"

  /dashboard/kpis:
    get:
      operationId: getDashboardKpis
      tags: [dashboard]
      summary: Indicadores de desempenho (KPIs)
      responses:
        "200":
          description: KPIs calculados
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/DashboardKpis"

  /dashboard/process-status:
    get:
      operationId: getDashboardProcessStatus
      tags: [dashboard]
      summary: Distribuição de processos por status
      responses:
        "200":
          description: Contagem por status
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/StatusCount"

components:
  schemas:
    HealthStatus:
      type: object
      properties:
        status:
          type: string
      required:
        - status

    Patient:
      type: object
      properties:
        id:
          type: integer
        nome:
          type: string
        cpf:
          type: string
        dataNascimento:
          type: string
          format: date
        diagnostico:
          type: string
        cid:
          type: string
        status:
          type: string
          enum: [ativo, inativo, em_avaliacao]
        telefone:
          type: string
        email:
          type: string
        responsavelTecnico:
          type: string
        createdAt:
          type: string
          format: date-time
        updatedAt:
          type: string
          format: date-time
      required:
        - id
        - nome
        - cpf
        - status
        - createdAt
        - updatedAt

    CreatePatientBody:
      type: object
      properties:
        nome:
          type: string
        cpf:
          type: string
        dataNascimento:
          type: string
          format: date
        diagnostico:
          type: string
        cid:
          type: string
        status:
          type: string
          enum: [ativo, inativo, em_avaliacao]
        telefone:
          type: string
        email:
          type: string
        responsavelTecnico:
          type: string
      required:
        - nome
        - cpf
        - status

    Report:
      type: object
      properties:
        id:
          type: integer
        patientId:
          type: integer
        patientName:
          type: string
        tipo:
          type: string
          enum: [laudo_inicial, acompanhamento, pericia, recurso]
        status:
          type: string
          enum: [rascunho, pendente_revisao, aprovado, enviado_inss]
        responsavel:
          type: string
        conteudo:
          type: string
        dataEnvio:
          type: string
          format: date-time
        createdAt:
          type: string
          format: date-time
        updatedAt:
          type: string
          format: date-time
      required:
        - id
        - patientId
        - tipo
        - status
        - responsavel
        - createdAt
        - updatedAt

    CreateReportBody:
      type: object
      properties:
        patientId:
          type: integer
        tipo:
          type: string
          enum: [laudo_inicial, acompanhamento, pericia, recurso]
        status:
          type: string
          enum: [rascunho, pendente_revisao, aprovado, enviado_inss]
        responsavel:
          type: string
        conteudo:
          type: string
        dataEnvio:
          type: string
          format: date-time
      required:
        - patientId
        - tipo
        - status
        - responsavel

    Process:
      type: object
      properties:
        id:
          type: integer
        patientId:
          type: integer
        patientName:
          type: string
        numeroProcesso:
          type: string
        beneficio:
          type: string
          enum: [bpc_loas, auxilio_doenca, aposentadoria_invalidez, auxilio_acidente]
        status:
          type: string
          enum: [em_andamento, deferido, indeferido, recurso, judicializado]
        dataAbertura:
          type: string
          format: date
        dataDecisao:
          type: string
          format: date
        retrabalhos:
          type: integer
        observacoes:
          type: string
        createdAt:
          type: string
          format: date-time
        updatedAt:
          type: string
          format: date-time
      required:
        - id
        - patientId
        - numeroProcesso
        - beneficio
        - status
        - dataAbertura
        - retrabalhos
        - createdAt
        - updatedAt

    CreateProcessBody:
      type: object
      properties:
        patientId:
          type: integer
        numeroProcesso:
          type: string
        beneficio:
          type: string
          enum: [bpc_loas, auxilio_doenca, aposentadoria_invalidez, auxilio_acidente]
        status:
          type: string
          enum: [em_andamento, deferido, indeferido, recurso, judicializado]
        dataAbertura:
          type: string
          format: date
        dataDecisao:
          type: string
          format: date
        retrabalhos:
          type: integer
        observacoes:
          type: string
      required:
        - patientId
        - numeroProcesso
        - beneficio
        - status
        - dataAbertura

    Training:
      type: object
      properties:
        id:
          type: integer
        titulo:
          type: string
        descricao:
          type: string
        tipo:
          type: string
          enum: [plataforma, documentacao, previdenciario, outros]
        modalidade:
          type: string
          enum: [presencial, online, hibrido]
        dataRealizacao:
          type: string
          format: date
        participantes:
          type: integer
        status:
          type: string
          enum: [agendado, em_andamento, concluido, cancelado]
        responsavel:
          type: string
        createdAt:
          type: string
          format: date-time
      required:
        - id
        - titulo
        - tipo
        - modalidade
        - dataRealizacao
        - participantes
        - status
        - responsavel
        - createdAt

    CreateTrainingBody:
      type: object
      properties:
        titulo:
          type: string
        descricao:
          type: string
        tipo:
          type: string
          enum: [plataforma, documentacao, previdenciario, outros]
        modalidade:
          type: string
          enum: [presencial, online, hibrido]
        dataRealizacao:
          type: string
          format: date
        participantes:
          type: integer
        status:
          type: string
          enum: [agendado, em_andamento, concluido, cancelado]
        responsavel:
          type: string
      required:
        - titulo
        - tipo
        - modalidade
        - dataRealizacao
        - participantes
        - status
        - responsavel

    DashboardSummary:
      type: object
      properties:
        totalPacientes:
          type: integer
        pacientesAtivos:
          type: integer
        totalProcessos:
          type: integer
        processosEmAndamento:
          type: integer
        totalRelatorios:
          type: integer
        relatoriosPendentes:
          type: integer
        totalTreinamentos:
          type: integer
        treinamentosConcluidos:
          type: integer
      required:
        - totalPacientes
        - pacientesAtivos
        - totalProcessos
        - processosEmAndamento
        - totalRelatorios
        - relatoriosPendentes
        - totalTreinamentos
        - treinamentosConcluidos

    DashboardKpis:
      type: object
      properties:
        tempoMedioConcessaoDias:
          type: number
        taxaIndeferimento:
          type: number
        totalRetrabalhos:
          type: integer
        totalJudicializados:
          type: integer
        taxaDeferimento:
          type: number
        relatoriosAprovadosPct:
          type: number
      required:
        - tempoMedioConcessaoDias
        - taxaIndeferimento
        - totalRetrabalhos
        - totalJudicializados
        - taxaDeferimento
        - relatoriosAprovadosPct

    StatusCount:
      type: object
      properties:
        status:
          type: string
        count:
          type: integer
      required:
        - status
        - count
