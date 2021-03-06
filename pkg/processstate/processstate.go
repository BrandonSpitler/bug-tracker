package processsharedstate

type ProcessSate struct {
	logState       logState
	dbState        dbTransInterface
	childProcesses []*ProcessSate
	parentProcess  *ProcessSate
}

func (thisProcSate *ProcessSate) GetParentProcess() *ProcessSate {
	return thisProcSate.parentProcess
}

func (thisProcSate *ProcessSate) GetChildProcesses() []*ProcessSate {
	return thisProcSate.childProcesses
}
