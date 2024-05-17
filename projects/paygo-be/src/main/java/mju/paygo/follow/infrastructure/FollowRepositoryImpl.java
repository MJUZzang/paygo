package mju.paygo.follow.infrastructure;

import lombok.RequiredArgsConstructor;
import mju.paygo.follow.domain.Follow;
import mju.paygo.follow.domain.FollowRepository;
import mju.paygo.member.domain.member.Member;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Repository
public class FollowRepositoryImpl implements FollowRepository {

    private final FollowJpaRepository followJpaRepository;

    @Override
    public boolean existsByFollowerAndFollowee(final Member follower, final Member followee) {
        return followJpaRepository.existsByFollowerAndFollowee(follower, followee);
    }

    @Override
    public Follow save(final Follow follow) {
        return followJpaRepository.save(follow);
    }

    @Override
    public void deleteByFollowerAndFollowee(final Member follower, final Member followee) {
        followJpaRepository.deleteByFollowerAndFollowee(follower, followee);
    }

    @Override
    public Optional<Follow> findById(final Long id) {
        return followJpaRepository.findById(id);
    }

    @Override
    public void deleteById(final Long id) {
        followJpaRepository.deleteById(id);
    }

    @Override
    public List<Follow> findAllByFollower(final Member follower) {
        return followJpaRepository.findAllByFollower(follower);
    }

    @Override
    public List<Follow> findAllByFollowee(final Member followee) {
        return followJpaRepository.findAllByFollowee(followee);
    }

    @Override
    public Optional<Follow> findByFollowerAndFollowee(final Member follower, final Member followee) {
        return followJpaRepository.findByFollowerAndFollowee(follower, followee);
    }

    @Override
    public long countByFollower(final Member follower) {
        return followJpaRepository.countByFollower(follower);
    }

    @Override
    public long countByFollowee(final Member followee) {
        return followJpaRepository.countByFollowee(followee);
    }
}
