class CreateEmail {
    create() {
        const email = `simon_${Date.now()}@test.com`
        return email;
    }
}
export default CreateEmail;