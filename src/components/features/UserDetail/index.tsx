import React from "react"
import { IUser } from "store/users/models"
import withQuery from "components/hoc/withQuery"
import styles from "./userDetail.module.scss"

interface IUserDetail {
  userDetail: IUser
  onFetchUser: (id: number) => void
  onClearUserDetail: () => void
  queryParams: any
}

const UserDetail: React.FC<IUserDetail> = ({
  userDetail,
  onFetchUser,
  onClearUserDetail,
  queryParams,
}) => {
  React.useEffect(() => {
    onFetchUser(queryParams.id)
    return () => {
      onClearUserDetail()
    }
  }, [])

  return (
    <div className={styles.container}>
      <img src={userDetail.avatar} alt="avatar" />
      <span>First Name: {userDetail.first_name}</span>
      <span>Last Name: {userDetail.last_name}</span>
      <span>Email: {userDetail.email}</span>
    </div>
  )
}

export default withQuery(UserDetail)
