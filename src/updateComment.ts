/*
 * Логика в updateComment потенциально могла привести к бесконечной рекурсии. 
   Вместо вызова метода из самого себя необходимо написать логику изменения.
 * Неявное название класса, которое можно заменить на CommentsStore;
 * Также можно реструктурировать метод updateComment для улучшения читаемости кода.
 */

type TComment = any
class CommentsStore {
  list: TComment = []

  updateComment(comment: TComment) {
    if (!this.getComment(comment.id)) {
      return this.createComment(comment)
    }

    // логика изменения комментария
  }

  getComment(id: number): boolean {
    return false
  }

  createComment(comment: TComment) {}
}
