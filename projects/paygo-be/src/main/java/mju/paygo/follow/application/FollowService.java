package mju.paygo.follow.application;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import mju.paygo.follow.domain.Follow;
import mju.paygo.follow.domain.FollowRepository;
import mju.paygo.follow.domain.FollowStatus;
import mju.paygo.follow.exception.exceptions.AlreadyFollowingException;
import mju.paygo.follow.exception.exceptions.FollowRelationshipNotFoundException;
import mju.paygo.follow.exception.exceptions.MemberNotFoundException;
import mju.paygo.follow.ui.dto.FollowResponse;
import mju.paygo.member.domain.member.Member;
import mju.paygo.member.domain.member.MemberRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Transactional
@Service
public class FollowService {

    private final FollowRepository followRepository;
    private final MemberRepository memberRepository;

    public void follow(final Long followerId, final Long followeeId) {
        Member follower = findMemberById(followerId);
        Member followee = findMemberById(followeeId);

        if (followRepository.existsByFollowerAndFollowee(follower, followee)) {
            throw new AlreadyFollowingException();
        }

        Follow follow = Follow.of(follower, followee, FollowStatus.ACCEPTED);
        followRepository.save(follow);
    }

    public void unfollow(final Long followerId, final Long followeeId) {
        Member follower = findMemberById(followerId);
        Member followee = findMemberById(followeeId);

        if (!followRepository.existsByFollowerAndFollowee(follower, followee)) {
            throw new FollowRelationshipNotFoundException();
        }

        followRepository.deleteByFollowerAndFollowee(follower, followee);
    }

    public List<FollowResponse> getFollowers(final Long memberId) {
        Member followee = findMemberById(memberId);
        return followRepository.findAllByFollowee(followee).stream()
                .map(follow -> new FollowResponse(follow.getFollower().getNickname(), follow.getFollower().getEmail()))
                .collect(Collectors.toList());
    }

    public List<FollowResponse> getFollowing(final Long memberId) {
        Member follower = findMemberById(memberId);
        return followRepository.findAllByFollower(follower).stream()
                .map(follow -> new FollowResponse(follow.getFollowee().getNickname(), follow.getFollowee().getEmail()))
                .collect(Collectors.toList());
    }

    private Member findMemberById(final Long memberId) {
        return memberRepository.findById(memberId)
                .orElseThrow(MemberNotFoundException::new);
    }
}

