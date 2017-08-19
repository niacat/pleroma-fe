import apiService from '../api/api.service.js'
import timelineFetcherService from '../timeline_fetcher/timeline_fetcher.service.js'

const backendInteractorService = (credentials) => {
  const fetchStatus = ({id}) => {
    return apiService.fetchStatus({id, credentials})
  }

  const fetchConversation = ({id}) => {
    return apiService.fetchConversation({id, credentials})
  }

  const fetchFriends = () => {
    return apiService.fetchFriends({credentials})
  }

  const fetchAllFollowing = ({username}) => {
    return apiService.fetchAllFollowing({username, credentials})
  }

  const followUser = (id) => {
    return apiService.followUser({credentials, id})
  }

  const unfollowUser = (id) => {
    return apiService.unfollowUser({credentials, id})
  }

  const startFetching = ({timeline, store, userId = false}) => {
    return timelineFetcherService.startFetching({timeline, store, credentials, userId})
  }

  const setUserMute = ({id, muted = true}) => {
    return apiService.setUserMute({id, muted, credentials})
  }

  const fetchMutes = () => apiService.fetchMutes({credentials})

  const register = (params) => apiService.register(params)
  const updateAvatar = ({params}) => apiService.updateAvatar({credentials, params})
  const updateBg = ({params}) => apiService.updateBg({credentials, params})
  const updateBanner = ({params}) => apiService.updateBanner({credentials, params})
  const updateProfile = ({params}) => apiService.updateProfile({credentials, params})

  const externalProfile = (profileUrl) => apiService.externalProfile(profileUrl)

  const backendInteractorServiceInstance = {
    fetchStatus,
    fetchConversation,
    fetchFriends,
    followUser,
    unfollowUser,
    fetchAllFollowing,
    verifyCredentials: apiService.verifyCredentials,
    startFetching,
    setUserMute,
    fetchMutes,
    register,
    updateAvatar,
    updateBg,
    updateBanner,
    updateProfile,
    externalProfile
  }

  return backendInteractorServiceInstance
}

export default backendInteractorService
