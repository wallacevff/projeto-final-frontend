export default (props: any) =>
    <div>
        {typeof (props.NroTurmas) !== "undefined" &&
            <div>
                Nro. de Turmas: {props.NroTurmas}
            </div>
        }
        {typeof (props.NroAlunos) !== "undefined" &&
            <div>
                Nro. de Alunos: {props.NroAlunos}
            </div>
        }
        {typeof (props.NroTarefas) !== "undefined" &&
            <div>
                Nro. de Tarefas: {props.NroTarefas}
            </div>
        }
    </div>