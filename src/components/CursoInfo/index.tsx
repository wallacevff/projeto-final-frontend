import style from "@/components/CursoInfo/CursoInfo.module.css";
export default (props: any) =>
    <div className={style.CursoInfo}>
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