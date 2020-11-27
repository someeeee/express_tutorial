import uuid4 from 'uuid4'

const uuid = () => {
  const tokens = uuid4().split('-')
  return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4]
  // UUID는 xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx 구조를 가짐
  // 이를 3 2 1 4 5 순서로 재배합하면 auto increment 값을 사용하는 것과 비슷한 수준의 인덱싱 성능을 가짐
}

export {
  uuid
}