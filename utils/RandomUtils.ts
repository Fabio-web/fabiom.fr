import { randomBytes } from "crypto"

class RandomUtils {

    randomString(length: number = 8) {
		return randomBytes(length).toString("hex")
    }

}

export default new RandomUtils()
