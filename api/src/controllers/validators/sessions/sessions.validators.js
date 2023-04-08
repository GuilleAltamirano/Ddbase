export const sessionsValidators = async (session) => {
    if (!session.counter && session.counter != 0) {
        session.counter = 0
        return (`Welcome ${session.id}`)
    }
    session.counter += 1
    return(`${session.id} view site ${session.counter}`)
}
